class TodoApp {
    constructor() {
        this.tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        this.editingId = null;
        this.initElements();
        this.init();
    }

    initElements() {
        this.elements = {
            taskInput: document.getElementById('task-input'),
            prioritySelect: document.getElementById('priority-select'),
            dueDate: document.getElementById('due-date'),
            addBtn: document.getElementById('add-btn'),
            taskList: document.getElementById('task-list'),
            clearCompleted: document.getElementById('clear-completed'),
            clearAll: document.getElementById('clear-all'),
            emptyState: document.getElementById('empty-state'),
            stats: {
                total: document.getElementById('total-tasks'),
                completed: document.getElementById('completed-tasks'),
                priority: document.getElementById('priority-tasks')
            },
            actions: document.querySelector('.actions')
        };
        this.themeToggle = document.getElementById('theme-toggle');
    }

    init() {
        this.bindEvents();
        this.render();
        this.loadTheme();
        this.updateDueDateToday();
    }

    bindEvents() {
        this.elements.addBtn.addEventListener('click', () => this.addOrUpdateTask());
        this.elements.taskInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.addOrUpdateTask();
        });
        this.elements.clearCompleted.addEventListener('click', () => this.clearCompleted());
        this.elements.clearAll.addEventListener('click', () => {
            if (confirm('Delete ALL tasks? This cannot be undone.')) this.clearAll();
        });
        this.themeToggle.addEventListener('click', () => this.toggleTheme());
    }

    updateDueDateToday() {
        const today = new Date().toISOString().split('T')[0];
        this.elements.dueDate.value = today;
    }

    addOrUpdateTask() {
        const text = this.elements.taskInput.value.trim();
        if (!text) return;

        if (this.editingId) {
            // Update existing task
            const task = this.tasks.find(t => t.id === this.editingId);
            if (task) {
                task.text = text;
                task.priority = this.elements.prioritySelect.value;
                task.dueDate = this.elements.dueDate.value;
            }
            this.elements.addBtn.textContent = '🚀 Add Task';
            this.editingId = null;
        } else {
            // Add new task
            const task = {
                id: Date.now(),
                text: text,
                priority: this.elements.prioritySelect.value,
                dueDate: this.elements.dueDate.value || '',
                completed: false,
                createdAt: new Date().toISOString()
            };
            this.tasks.unshift(task);
        }

        // Reset form
        this.elements.taskInput.value = '';
        this.elements.prioritySelect.value = 'medium';
        this.updateDueDateToday();
        
        this.save();
        this.render();
    }

    toggleComplete(id) {
        const task = this.tasks.find(t => t.id === id);
        if (task) {
            task.completed = !task.completed;
            this.save();
            this.render();
        }
    }

    editTask(id) {
        const task = this.tasks.find(t => t.id === id);
        if (task && !task.completed) {
            this.editingId = id;
            this.elements.taskInput.value = task.text;
            this.elements.prioritySelect.value = task.priority;
            this.elements.dueDate.value = task.dueDate;
            this.elements.addBtn.textContent = '💾 Save Changes';
            this.elements.taskInput.focus();
            this.elements.taskInput.select();
        }
    }

    deleteTask(id) {
        if (confirm('Delete this task?')) {
            this.tasks = this.tasks.filter(t => t.id !== id);
            this.save();
            this.render();
        }
    }

    clearCompleted() {
        this.tasks = this.tasks.filter(t => !t.completed);
        this.save();
        this.render();
    }

    clearAll() {
        this.tasks = [];
        this.save();
        this.render();
    }

    save() {
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }

    getPriorityCount() {
        return this.tasks.filter(t => t.priority === 'high').length;
    }

    updateStats() {
        const total = this.tasks.length;
        const completed = this.tasks.filter(t => t.completed).length;
        const highPriority = this.getPriorityCount();

        this.elements.stats.total.textContent = total;
        this.elements.stats.completed.textContent = completed;
        this.elements.stats.priority.textContent = highPriority;
    }

    formatDate(dateStr) {
        if (!dateStr) return '';
        const date = new Date(dateStr + 'T00:00:00');
        return date.toLocaleDateString('en-IN', { 
            weekday: 'short', 
            month: 'short', 
            day: 'numeric' 
        });
    }

    isOverdue(dueDate) {
        if (!dueDate) return false;
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const due = new Date(dueDate + 'T00:00:00');
        due.setHours(0, 0, 0, 0);
        return due < today;
    }

    render() {
        this.updateStats();

        if (this.tasks.length === 0) {
            this.elements.taskList.style.display = 'none';
            this.elements.emptyState.style.display = 'block';
            this.elements.actions.style.display = 'none';
            return;
        }

        this.elements.taskList.style.display = 'block';
        this.elements.emptyState.style.display = 'none';
        this.elements.actions.style.display = 'flex';

        this.elements.taskList.innerHTML = this.tasks.map((task, index) => {
            const overdue = this.isOverdue(task.dueDate);
            const priorityClass = `priority-${task.priority}`;
            const priorityText = task.priority.charAt(0).toUpperCase() + task.priority.slice(1);
            const dueText = task.dueDate ? this.formatDate(task.dueDate) : '';

            return `
                <li class="task-item ${priorityClass} ${task.completed ? 'completed' : ''}" data-id="${task.id}">
                    <div class="task-content">
                        <input type="checkbox" class="task-checkbox" ${task.completed ? 'checked' : ''} onchange="app.toggleComplete(${task.id})">
                        <div class="task-main">
                            <div class="task-text">${this.escapeHtml(task.text)}</div>
                            <div class="task-meta">
                                ${task.priority ? `<span class="priority-badge">${priorityText}</span>` : ''}
                                ${dueText ? `<span class="due-date ${overdue ? 'overdue' : ''}">${dueText}${overdue ? ' ⏰' : ''}</span>` : ''}
                            </div>
                        </div>
                        <div class="task-actions">
                            <button class="btn complete-btn" onclick="app.toggleComplete(${task.id})">✅</button>
                            <button class="btn edit-btn" onclick="app.editTask(${task.id})" ${task.completed ? 'disabled' : ''}>✏️</button>
                            <button class="btn delete-btn" onclick="app.deleteTask(${task.id})">🗑️</button>
                        </div>
                    </div>
                </li>
            `;
        }).join('');

        // Hide actions if no tasks
        if (this.tasks.length === 0) {
            this.elements.actions.style.display = 'none';
        }
    }

    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    toggleTheme() {
        const body = document.body;
        const currentTheme = body.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        body.setAttribute('data-theme', newTheme);
        this.themeToggle.textContent = newTheme === 'dark' ? '☀️' : '🌙';
        localStorage.setItem('theme', newTheme);
    }

    loadTheme() {
        const savedTheme = localStorage.getItem('theme') || 'light';
        document.body.setAttribute('data-theme', savedTheme);
        this.themeToggle.textContent = savedTheme === 'dark' ? '☀️' : '🌙';
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.app = new TodoApp();
});

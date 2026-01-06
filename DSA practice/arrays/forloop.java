public class forloop{
    public static void update(int marks[]){
        for (int i = 0; i < marks.length; i++) {
         marks[i]=marks[i]+1;   
        }
    }
    public static void main(String[] args) {
        int marks[]={32,98,66};
        for (int i = 0; i < marks.length; i++){
        System.out.println("marks is"+marks[i]);
    }
    update(marks);
}}
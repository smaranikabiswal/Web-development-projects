public class updatebit{
    public static int  sbit(int n,int i){
        return n|(1<<i); 
          
    }
    public static int clrbit(int n,int i){
        return n & ~(1<<i);
    }
    public static int update(int n,int i,int newbit){
if (newbit ==0) {
    return clrbit(n,i);
} else {
    return sbit(n,i);
}
    }
    public static void main(String[] args) {
       
        System.out.println(update(6,1,0));
    }
}
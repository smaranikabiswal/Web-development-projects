public class setbit{
    public static int  sbit(int n,int i){
        return n|(1<<i); 
          
    }
    public static void main(String[] args) {
      System.out.println(sbit(10,2));  

    }
}
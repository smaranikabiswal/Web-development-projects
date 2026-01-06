

public class factorial{
    public static void fact(int a){
        int factorial=1;
        for (int i = 1; i <=a; i++) {
             factorial=factorial*i;
        
        }
         System.out.println("factorial is "+factorial);   
        }
       public static void main(String args[]){
            int a=4;
            fact(a);
        }
    }

public class moverloading{
    public static void main(String[] args) {
        calculator c1=new calculator();
        System.out.println(c1.sum(1,2));
        System.out.println(c1.sum((float)1.3,(float)2.4));
        System.out.println(c1.sum(1,2,6));
    }}
        class calculator{
          int  sum(int a,int b){
            return a+b;
          }
          float  sum(float a,float b){
                return a+b;
            }
           int sum(int a,int b,int c){
            return a+b+c;
           }
        }
    

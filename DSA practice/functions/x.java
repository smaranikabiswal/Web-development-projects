public class x{
     public static int fact(int a){
        int factorial=1;
        for (int i = 1; i <=a; i++) {
             factorial=factorial*i;
        }
             return factorial;
        
        }
    public static int co(int n,int r){
 int fact_n=fact(n);
 int fact_r=fact(r);
 int fact_nmr=fact(n-r);
int co=fact_n/(fact_r*fact_nmr);
return co;
    }
       public static void main(String args[]){
       System.out.println(co(5,2
       ));     
    }
}
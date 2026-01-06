public class clearbits{
public static int clrbits(int n,int i){
    return n & ((-1)<<i);
}
public static void main(String[] args) {
  System.out.println(clrbits(5,1));  
}
}
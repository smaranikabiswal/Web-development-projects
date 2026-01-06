public class price{
    public static int stock(int arr[]){
        int maxprofit=0;
        int buyprice=Integer.MAX_VALUE;
        for (int i = 0; i < arr.length; i++) {
           if (buyprice<arr[i]) {
             int profit=arr[i]-buyprice; 
             maxprofit=Math.max(maxprofit,profit);
           }else{
            buyprice=arr[i];
           }
            
        }
        return maxprofit;
    }
    public static void main(String[] args) {
        int arr[]={12,2,7,9,3};
        System.out.println(stock(arr));
    }
}
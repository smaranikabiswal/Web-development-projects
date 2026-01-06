public class lastoccurance{
    public static int find(int arr[],int key,int i){
        if (i==arr.length) {
          return -1;

        }
        int found=find(arr,key,i+1);
        if(found != -1){
            return found;
        }
        if (arr[i]==key) {
           return i; 
        }
       return found; 
    }
     public static void main(String[] args) {
        int arr[]={8,3,6,9,5,10,2,5,3};
        System.out.println(find(arr,5,0));
    }
}
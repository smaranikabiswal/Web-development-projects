public class spiralmatrix {
   public static void spiral(int matrix[][]){
    int startrow=0;
    int startcol=0;
    int endrow=matrix.length-1;
    int endcol=matrix[0].length-1;
    while(startrow<=endrow && startcol<=endcol){
        for(int j=startcol;j<=endcol;j++){
            System.out.print(matrix[startrow][j]+ " ");
        }
        for(int i=startrow+1;i<=endrow;i++){
            System.out.print(matrix[i][startcol]+ " ");
        }
        for(int j=endcol-1;j>=startcol;j--){
            if (startcol==endcol) {
               return; 
            }
            System.out.print(matrix[endrow][j]+ " ");
        }
        for(int i=endrow;i>=startrow;i--){
            System.out.print(matrix[i][endcol]+ " ");
        }
        startcol++;
        startrow++;
        endcol--;
        endrow--;
    }
    System.out.println();
   }
   public static void main(String args[]){
    int matrix[][]={{1,2,3}
    ,{4,5,6},
    {7,8,9}};
    spiral(matrix);
   }
}
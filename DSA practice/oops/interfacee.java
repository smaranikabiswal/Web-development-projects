public class interfacee{
    public static void main(String[] args) {
       queen q=new queen();
       q.moves();      

       
    }
}
interface chessplayer{
    void moves();

}
class queen implements chessplayer{
    public void moves(){
        System.out.println("up,down,left,right");
    }
}
class quak implements chessplayer{
    public void moves(){
        System.out.println("up,down");
    }
}

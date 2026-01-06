public class abstractclass{
    public static void main(String[] args) {
      
      dog d1=new dog();
      d1.eats();
        d1.walks();
        cat c1=new cat();
      c1.eats();
        c1.walks();
        
      }  
    }

abstract class animal{
    void eats(){
        System.out.println("animal eats");

    }
    abstract void walks();
}
class dog extends animal{
    void walks(){
        System.out.println("dog walks on 4 legs");
    }
}
class cat extends animal{
     void walks(){
        System.out.println(" cat walks on 4 legs too");
    }
}
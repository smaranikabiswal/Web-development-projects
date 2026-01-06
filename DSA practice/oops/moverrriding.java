public class moverrriding{
public static void main(String[] args) {
    dog d=new dog();
    d.eat();
    
}
}
class animal{
    void eat(){
        System.out.println("eats anything");
    }

}
class dog extends animal{
    void eat(){
        System.out.println("eats meat only");
    }
}
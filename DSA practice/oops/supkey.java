

public class supkey{
    public static void main(String[] args) {
     horse h=new horse();
     System.out.println(h.color);   
    }
}
class animal{
    String color;
animal(){
    System.out.println("cry");
}
}
class horse extends animal{
    horse(){
        super.color="brown";
System.out.println("lol");
    }
}
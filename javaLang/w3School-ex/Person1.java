class Address {
  int     nr = 5;
 String   zip = "37121";
  String  street = "Via Apollo 5";
  String  city   = "Verona";

}

public class Person1 {
  public static void main(String[] args) {
    Address myAddress = new Address();
    System.out.println(myAddress.street + " " + myAddress.nr + " " + myAddress.zip  + " "  + myAddress.city); 
  }
}

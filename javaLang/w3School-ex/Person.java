
class Address{
    String street = "Via Apollo";
    String city = "Verona";
    int    houseNumber = 5;
    String zip = "37135";
  }

public class Person{
  int age = 17;
  String name = "Mirko";
  String surname = "Mega";

    public static void main(String[] args) {
      Person Mirko = new Person();
      Address Location = new Address();
      System.out.println("Nome: " + Mirko.name + " Cognome: " + Mirko.surname + " Age: " + Mirko.age);
      System.out.println("City: " + Location.city + " Zip code: " + Location.zip + " Street: " + Location.street + " Nr: " + Location.houseNumber);
  }
}

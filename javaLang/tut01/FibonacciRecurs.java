     import java.util.Scanner;

     class FibonacciRecurs{  
     static int n1=0,n2=1,n3=0;    
     static void printFibonacci(int count){    
        if(count>0){    
             n3 = n1 + n2;    
             n1 = n2;    
             n2 = n3;    
             System.out.print(" "+n3);   
             printFibonacci(count-1);    
         }    
     }	

     public static void main(String args[]){    
      try{
       //Programma
       Scanner countObj = new Scanner(System.in);
       if (confirm == "y"){
       System.out.println("Nr. di volte da eseguire il calcolo");
       int count = countObj.nextInt();
       long startTime = System.nanoTime();
       System.out.print(n1+" "+n2);//printing 0 and 1
       printFibonacci(count - 2);//n-2 because 2 numbers are already printed   
       System.out.println();
       long endTime = System.nanoTime();
       long duration = (endTime - startTime);  //divide by 1000000 to get milliseconds.    
       System.out.println("duration (s): " + duration/1000000);
       
       //Richiesta di riesecuzione
       String confirm = countObj.nextLine();
       System.out.println("Vuoi eseguire di nuovo il programma? y/n");
         
      }
      else {
      	exit;
      }
      catch (Exception e) {
        System.out.println("Something went wrong.");  
      }
     }
    }  

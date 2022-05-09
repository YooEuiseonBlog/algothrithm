import java.util.Scanner;

public class back_1225 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String[] input = sc.nextLine().split(" ");
        String splitStr1 = input[0];
        String splitStr2 = input[1];
        long result = 0;
        char[] chArr1 = splitStr1.toCharArray();
        char[] chArr2 = splitStr2.toCharArray();
        for (char c1 : chArr1) {
            for (char c2 : chArr2) {
                result += (c1-'0')*(c2-'0');
            }
        }
        System.out.println(result);
    }//main
}//class

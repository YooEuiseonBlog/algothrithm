import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class digitalCode_6378 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        List<String> list = new ArrayList<>();
        while (true) {
            String input = sc.next();
            if (input.equals("0")) {
                break;
            }    
            list.add(input);
            
        }
        for (String str : list) {
            while (str.length() >= 2) {
                int result = 0;
                char[] chArr = str.toCharArray();
                for (char c : chArr) {
                    int cnt = c - '0'; 
                    result += cnt;
                    str = result + "";
                }
            }
            System.out.println(Integer.parseInt(str));
        }
    }// main
}// class

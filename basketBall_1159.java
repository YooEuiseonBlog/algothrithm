import java.util.ArrayList;
import java.util.Collections;
import java.util.HashSet;
import java.util.List;
import java.util.Scanner;
import java.util.Set;

public class basketBall_1159 {
    public static void main(String[] args) {
        String result = "";
        List<String> list = new ArrayList<String>();
        Scanner input = new Scanner(System.in);
        int cnt = input.nextInt();
        for(int i=0; i < cnt; i++) {
            String name = input.next();
            String first = Character.toString(name.charAt(0)); 
            list.add(first);            
        }
        
        Set<String> set  = new HashSet<String>(list);
        for (String str : set) {
            if(Collections.frequency(list, str)>=5) {
                result += str;
            }
        }
        if(result.equals("")) {
            result+="PREDAJA";
        }
        System.out.println(result.toString());
    }//main

}//class

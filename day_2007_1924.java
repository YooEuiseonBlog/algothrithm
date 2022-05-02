import java.time.DayOfWeek;
import java.time.LocalDate;
import java.time.format.TextStyle;
import java.util.Locale;
import java.util.Scanner;

public class day_2007_1924 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String[] input = sc.nextLine().split(" ");
        int month = Integer.parseInt(input[0]);
        int dayOfMonth = Integer.parseInt(input[1]);
        LocalDate date = LocalDate.of(2007, month, dayOfMonth);
        DayOfWeek dayOfWeek = date.getDayOfWeek();
        System.out.println(dayOfWeek.getDisplayName(TextStyle.SHORT, Locale.US).toUpperCase());
    }
}

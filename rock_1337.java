import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class rock_1337 {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int Nsong = sc.nextInt(); // 노래의 개수  2
		int Lsecond = sc.nextInt(); // 노래의 길이 5
		int Dbell = sc.nextInt(); // 벨 딜레이 3
		List<Integer> list = new ArrayList<Integer>();
		for (int i = 0; i < Nsong; i++) {
			for (int j = 0; j < Lsecond; j++) {
				list.add(1);
			}// 노래 진행
            // 노래 진행 X
			for (int j = 0; j < 5; j++) {
				list.add(0);
			}
		}
        // 1. 노래 스타트 == 벨 스타트 안됨
        // 2. 노래 끝날 때
        //11111000001111100000//---> 휴대폰 소리  19  20
		int time = 0;
		while (true) {
			if (time >= list.size()) {//모든 노래 끝나고 정적만 남음 + 인터벌
				break;
			}
			if (list.get(time) == 0) // value값 0 ---> 소리를 쌉가능?
				break;
			else {
				time += Dbell; // +1
			}
		}
		System.out.println(time);
	}
}
public class abhi {
    public static int countMatches(String[][] k, String a, String b) {
        int count = 0;
        for (String[] person : k) {
            String gender = person[0];
            String name = person[1];
            String age = person[2];
            
            if ((a.equals("gender") && b.equals(gender))
                || (a.equals("name") && b.equals(name))
                || (a.equals("age") && b.equals(age))) {
                count++;
            }
        }
        return count;
    }

    public static void main(String[] args) {
        String[][] k = {{"male", "jake", "19"}, {"female", "mully", "21"}, {"female", "male", "30"}};
        String a = "gender";
        String b = "male";

        int matchCount = countMatches(k, a, b);
        System.out.println(matchCount);  // Output: 1
    }
}
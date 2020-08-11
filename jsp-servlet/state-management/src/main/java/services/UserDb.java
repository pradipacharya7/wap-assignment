package services;

import java.util.ArrayList;
import java.util.List;

public class UserDb {

    private List<User> userlist = new ArrayList<User>();

    public UserDb(){
        userlist.add(new User("user1","user1"));
        userlist.add(new User("bmishra@miu.edu","7031#Abc"));
    }
    public User findByUser(String username, String password){
        for(User user:this.userlist){
            if(user.getUsername().equals(username.trim()) && user.getPassword().equals(password.trim())){
                return user;
            }
        }
        return null;
    }
}

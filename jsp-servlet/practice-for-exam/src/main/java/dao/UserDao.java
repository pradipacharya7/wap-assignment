package dao;

import model.User;

import java.util.ArrayList;
import java.util.List;

public class UserDao {
    ArrayList<User> users=new ArrayList<User>();
    public UserDao()
    {
        users.add(new User("user1","password"));
        users.add(new User("user2","password"));
    }

    public User findUser(String username,String password)
    {
        for(User user:users)
        {
            if(user.getUsername().equals(username.trim()) && user.getPassword().equals(password.trim()))
            {
                return user;
            }
        }
        return null;

    }
}

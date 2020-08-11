package service;

import model.User;

import java.util.ArrayList;

public class DataClass {
    ArrayList<User> users=new ArrayList<User>();
    public DataClass() {

        users.add(new User("user1","password"));
        users.add(new User("user2","password"));
    }

    public User findUser(String username,String password)
    {
      for(User user:users)
      {
        if(user.getUsername().equals(username.trim())&&user.getPassword().equals(password.trim()))
        {
            return user;
        }
      }
    return null;
    }
}

package testesAPI;

import com.intuit.karate.junit5.Karate;

 class RMRunner{
    @Karate.Test
    Karate testAPIFetin(){
        return Karate.run("RM").relativeTo(getClass());
    }

}
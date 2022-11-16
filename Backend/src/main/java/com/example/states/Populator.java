package com.example.states;

import com.example.states.Model.State;
import com.example.states.Repository.StateRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class Populator implements CommandLineRunner{

    private StateRepository stateRepo;

    public Populator(StateRepository stateRepo){
        this.stateRepo = stateRepo;
    }

    @Override
    public void run(String... args) throws Exception {
        State AL = new State("Alabama", "AL","Montgomery",5039877);
        State AK = new State("Alaska", "AK","Juneau",732673);
        State AZ = new State("Arizona", "AZ","Phoenix",7276316);
        State AR = new State("Arkansas","AR","Little Rock",3025891);
        State CA = new State("California", "CA","Sacramento",39237836);
        State CO = new State("Colorado", "CO","Denver",5812069);
        State CT = new State("Connecticut", "CT","Hartford",3605597);
        State DE = new State("Delaware", "CA","Dover",1003384);
        State FL = new State("Florida", "FL","Tallahassee",21781128);
        State GA = new State("Georgia", "GA","Atlanta",10799566);
        State HI = new State("Hawaii", "HI","Honolulu",1441553);
        State ID = new State("Idaho", "ID","Boise",1900923);
        State IL = new State("Illinois", "IL","Springfield",12671469);
        State IN = new State("Indiana", "IN","Indianapolis",6805985);
        State IA = new State("Iowa", "GA","Des Moines",3193079);
        State KS = new State("Kansas", "KS","Topeka",2934582);
        State KY = new State("Kentucky", "KY","Frankfort",4509394);
        State LA = new State("Louisiana", "LA","Baton Rouge",4624047);
        State ME = new State("Maine", "ME","Augusta",1372247);
        State MD = new State("Maryland", "MD","Annapolis",6165129);
        State MA = new State("Massachusetts", "MA","Boston",6984723);
        State MI = new State("Michigan", "MI","Lansing",10050811);
        State MN = new State("Minnesota", "MN","Saint Paul",5707390);
        State MS = new State("Mississippi", "MS","Jackson",2949965);
        State MO = new State("Missouri", "MO","Jefferson City",5039877);
        State MT = new State("Montana", "MT","Helena",1104271);
        State NE = new State("Nebraska", "NE","Lincoln",1963692);
        State NV = new State("Nevada", "NV","Carson City",3143991);
        State NH = new State("New Hampshire", "NH","Concord",1388992);
        State NJ = new State("New Jersey", "NJ","Trenton",9267130);
        State NM = new State("New Mexico", "NM","Santa Fe",2115877);
        State NY = new State("New York", "NY","Albany",19835913);
        State NC = new State("North Carolina", "NC","Raleigh",10551162);
        State ND = new State("North Dakota", "ND","Bismarck",774948);
        State OH = new State("Ohio", "OH","Columbus",11780017);
        State OK = new State("Oklahoma", "OK","Oklahoma City",3986639);
        State OR = new State("Oregon", "OR","Salem",4246155);
        State PA = new State("Pennsylvania", "PA","Harrisburg",12964056);
        State RI = new State("Rhode Island", "RI","Providence",1095610);
        State SC = new State("South Carolina", "SC","Columbia",5190705);
        State SD = new State("South Dakota", "SD","Pierre",895376);
        State TN = new State("Tennessee", "TN","Nashville",6975218);
        State TX = new State("Texas", "TX","Austin",29527941);
        State UT = new State("Utah", "UT","Salt Lake City",3322389);
        State VT = new State("Vermont", "VT","Montpelier",645570);
        State VA = new State("Virginia", "VA","Richmond",8642274);
        State WA = new State("Washington", "WA","Olympia",7738692);
        State WV = new State("West Virginia", "WV","Charleston",1782959);
        State WI = new State("Wisconsin", "WI","Madison",5895908);
        State WY = new State("Wyoming", "WY","Cheyenne",578803);

        stateRepo.save(AL);
        stateRepo.save(AK);
        stateRepo.save(AZ);
        stateRepo.save(AR);
        stateRepo.save(CA);
        stateRepo.save(CO);
        stateRepo.save(CT);
        stateRepo.save(DE);
        stateRepo.save(FL);
        stateRepo.save(GA);
        stateRepo.save(HI);
        stateRepo.save(ID);
        stateRepo.save(IL);
        stateRepo.save(IN);
        stateRepo.save(IA);
        stateRepo.save(KS);
        stateRepo.save(KY);
        stateRepo.save(LA);
        stateRepo.save(ME);
        stateRepo.save(MD);
        stateRepo.save(MA);
        stateRepo.save(MI);
        stateRepo.save(MN);
        stateRepo.save(MS);
        stateRepo.save(MO);
        stateRepo.save(MT);
        stateRepo.save(NE);
        stateRepo.save(NV);
        stateRepo.save(NH);
        stateRepo.save(NJ);
        stateRepo.save(NM);
        stateRepo.save(NY);
        stateRepo.save(NC);
        stateRepo.save(ND);
        stateRepo.save(OH);
        stateRepo.save(OK);
        stateRepo.save(OR);
        stateRepo.save(PA);
        stateRepo.save(RI);
        stateRepo.save(SC);
        stateRepo.save(SD);
        stateRepo.save(TN);
        stateRepo.save(TX);
        stateRepo.save(UT);
        stateRepo.save(VT);
        stateRepo.save(VA);
        stateRepo.save(WA);
        stateRepo.save(WV);
        stateRepo.save(WI);
        stateRepo.save(WY);

































    }
}

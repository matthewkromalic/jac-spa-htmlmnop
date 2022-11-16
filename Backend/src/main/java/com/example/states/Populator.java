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
        State AL = new State("Alabama", "AL","Montgomery",5039877,9,1819);
        State AK = new State("Alaska", "AK","Juneau",732673,3,1959);
        State AZ = new State("Arizona", "AZ","Phoenix",7276316,11,111912);
        State AR = new State("Arkansas","AR","Little Rock",3025891,6,1836);
        State CA = new State("California", "CA","Sacramento",39237836,55,1850);
        State CO = new State("Colorado", "CO","Denver",5812069,9,1788);
        State CT = new State("Connecticut", "CT","Hartford",3605597,7,1788);
        State DE = new State("Delaware", "CA","Dover",1003384,3,1787);
        State FL = new State("Florida", "FL","Tallahassee",21781128,29,1845);
        State GA = new State("Georgia", "GA","Atlanta",10799566,16,1788);
        State HI = new State("Hawaii", "HI","Honolulu",1441553,4,1959);
        State ID = new State("Idaho", "ID","Boise",1900923,4,1890);
        State IL = new State("Illinois", "IL","Springfield",12671469,20,1818);
        State IN = new State("Indiana", "IN","Indianapolis",6805985,11,1816);
        State IA = new State("Iowa", "GA","Des Moines",3193079,6,1846);
        State KS = new State("Kansas", "KS","Topeka",2934582,6,1861);
        State KY = new State("Kentucky", "KY","Frankfort",4509394,8,1792);
        State LA = new State("Louisiana", "LA","Baton Rouge",4624047,8,1812);
        State ME = new State("Maine", "ME","Augusta",1372247,4,1820);
        State MD = new State("Maryland", "MD","Annapolis",6165129,10,1788);
        State MA = new State("Massachusetts", "MA","Boston",6984723,11,1788);
        State MI = new State("Michigan", "MI","Lansing",10050811,16,1837);
        State MN = new State("Minnesota", "MN","Saint Paul",5707390,10,1858);
        State MS = new State("Mississippi", "MS","Jackson",2949965,6,1817);
        State MO = new State("Missouri", "MO","Jefferson City",5039877,10,1821);
        State MT = new State("Montana", "MT","Helena",1104271,3,1889);
        State NE = new State("Nebraska", "NE","Lincoln",1963692,5,1867);
        State NV = new State("Nevada", "NV","Carson City",3143991,6,1864);
        State NH = new State("New Hampshire", "NH","Concord",1388992,4,1788);
        State NJ = new State("New Jersey", "NJ","Trenton",9267130,14,1787);
        State NM = new State("New Mexico", "NM","Santa Fe",2115877,5,1912);
        State NY = new State("New York", "NY","Albany",19835913,29,1788);
        State NC = new State("North Carolina", "NC","Raleigh",10551162,15,1789);
        State ND = new State("North Dakota", "ND","Bismarck",774948,3,1889);
        State OH = new State("Ohio", "OH","Columbus",11780017,18,1803);
        State OK = new State("Oklahoma", "OK","Oklahoma City",3986639,7,1907);
        State OR = new State("Oregon", "OR","Salem",4246155,7,1859);
        State PA = new State("Pennsylvania", "PA","Harrisburg",12964056,20,1787);
        State RI = new State("Rhode Island", "RI","Providence",1095610,4,1790);
        State SC = new State("South Carolina", "SC","Columbia",5190705,9,1788);
        State SD = new State("South Dakota", "SD","Pierre",895376,3,1889);
        State TN = new State("Tennessee", "TN","Nashville",6975218,11,1796);
        State TX = new State("Texas", "TX","Austin",29527941,38,1845);
        State UT = new State("Utah", "UT","Salt Lake City",3322389,6,1896);
        State VT = new State("Vermont", "VT","Montpelier",645570,3,1791);
        State VA = new State("Virginia", "VA","Richmond",8642274,13,1788);
        State WA = new State("Washington", "WA","Olympia",7738692,12,1889);
        State WV = new State("West Virginia", "WV","Charleston",1782959,5,1863);
        State WI = new State("Wisconsin", "WI","Madison",5895908,10,1848);
        State WY = new State("Wyoming", "WY","Cheyenne",578803,3,1890);

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

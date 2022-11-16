package com.example.states.Model;

import javax.persistence.*;

@Entity
public class State {

    @Id
    @GeneratedValue
    private long id;

    private String name;
    private String abv;
    private String capital;
    private int population;
    private int electoralVotes;
    private int yearEst;


    public State(String name,String abv, String capital, int population, int electoralVotes,int yearEst){
        this.name = name;
        this.abv = abv;
        this.capital = capital;
        this.population = population;
        this.electoralVotes = electoralVotes;
        this.yearEst = yearEst;

    }

    public State(){

    }

    public long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getAbv() {
        return abv;
    }

    public String getCapital() {
        return capital;
    }

    public int getPopulation() {
        return population;
    }

    public int getElectoralVotes(){
        return electoralVotes;
    }

    public int getYearEst() {
        return yearEst;
    }
}

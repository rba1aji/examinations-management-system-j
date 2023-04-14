package server.rba1aji.academicmanagementsystem.exams.management.models;

public class Degree {
    private String id;
    private String name;

    public Degree(){

    }
    public Degree(String id, String name) {
        this.id = id;
        this.name = name;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}

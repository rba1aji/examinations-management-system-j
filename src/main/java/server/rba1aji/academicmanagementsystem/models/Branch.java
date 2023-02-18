package server.rba1aji.academicmanagementsystem.models;

public class Branch {
    private String id;
    private String name;
    private String degreeid;

    public Branch(String id, String name, String degreeid) {
        this.id = id;
        this.name = name;
        this.degreeid = degreeid;
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

    public String getDegreeid() {
        return degreeid;
    }

    public void setDegreeid(String degreeid) {
        this.degreeid = degreeid;
    }
}

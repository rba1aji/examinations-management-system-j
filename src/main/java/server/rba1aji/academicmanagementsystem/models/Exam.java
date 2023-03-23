package server.rba1aji.academicmanagementsystem.models;

public class Exam {
    private Integer id;
    private String name;
    private Integer semester;
    private String batch;

    public Exam(){}

    public Exam(Integer id, String name, Integer semester, String batch) {
        this.id = id;
        this.name = name;
        this.semester = semester;
        this.batch = batch;
    }

    @Override
    public String toString() {
        return "Exam{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", semester=" + semester +
                ", batch='" + batch + '\'' +
                '}';
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getSemester() {
        return semester;
    }

    public void setSemester(Integer semester) {
        this.semester = semester;
    }

    public String getBatch() {
        return batch;
    }

    public void setBatch(String batch) {
        this.batch = batch;
    }
}

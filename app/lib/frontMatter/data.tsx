type data = {
  title: string;
  id: number;
  parent: string;
  type: string;
  archived: boolean;
  subject: string;
};

export const DATA: data[] = [
  {
    title: "Set Theory",
    parent: "Discrete Mathematics",
    subject: "Computer Science",
    type: "Semester",
    id: 2401121104,
    archived: false,
  },
  {
    title: "Relations",
    parent: "Discrete Mathematics",
    subject: "Computer Science",
    type: "Semester",
    id: 2401151836,
    archived: false,
  },
  {
    title: "Boolean Algebra",
    parent: "Digital Circuits",
    subject: "Computer Science",
    type: "Semester",
    id: 2401191303,
    archived: false
  }
];


export interface Topic {
  id: string;
  title: string;
  content: string;
}


export const TOPICS: Topic[] = [
  {
    id: 'intro',
    title: 'Java Introduction',
    content: `
      <h2>Java Introduction</h2>
      <p>Java is a high-level, object-oriented programming language.</p>

      <h3>Features of Java</h3>
      <ul>
        <li>Platform Independent</li>
        <li>Object-Oriented</li>
        <li>Secure</li>
      </ul>

      <h3>Example:</h3>
      <pre><code>
public class Main {
  public static void main(String[] args) {
    System.out.println("Hello World");
  }
}
      </code></pre>
    `
  },

  {
    id: 'variables',
    title: 'Variables in Java',
    content: `
      <h2>Variables in Java</h2>
      <p>Variables are used to store data.</p>

      <h3>Example:</h3>
      <pre><code>
int x = 10;
String name = "Amrish";
System.out.println(x);
      </code></pre>
    `
  },

  {
    id: 'datatypes',
    title: 'Data Types',
    content: `
      <h2>Data Types</h2>
      <p>Java has two types of data types:</p>

      <ul>
        <li>Primitive</li>
        <li>Non-Primitive</li>
      </ul>

      <h3>Example:</h3>
      <pre><code>
int a = 5;
double b = 10.5;
char c = 'A';
      </code></pre>
    `
  },

  {
    id: 'loops',
    title: 'Loops in Java',
    content: `
      <h2>Loops in Java</h2>
      <p>Loops are used to execute a block of code repeatedly.</p>

      <h3>For Loop Example:</h3>
      <pre><code>
for(int i = 0; i < 5; i++) {
  System.out.println(i);
}
      </code></pre>
    `
  },

  {
    id: 'oops',
    title: 'OOP Concepts',
    content: `
      <h2>Object-Oriented Programming</h2>

      <ul>
        <li>Encapsulation</li>
        <li>Inheritance</li>
        <li>Polymorphism</li>
        <li>Abstraction</li>
      </ul>

      <h3>Example:</h3>
      <pre><code>
class Animal {
  void sound() {
    System.out.println("Animal makes sound");
  }
}
      </code></pre>
    `
  }
];
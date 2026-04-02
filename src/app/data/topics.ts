
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

 
];
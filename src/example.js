const defaultExample = `# Table Of Content
[TOC]

## monaco-editor
[Document](https://microsoft.github.io/monaco-editor/api/index.html) | [Home Page](https://microsoft.github.io/monaco-editor/)


## MathJax
[Document](https://docs.mathjax.org/en/v2.7-latest/index.html) | [Home Page](https://www.mathjax.org/)


1. $$ x = \\frac {-b \\pm \\sqrt{b^2 - 4ac }}{2a}$$, ( $$ b^2 - 4ac \\ge 0$$ )

1. $$\\Delta = b^2 - 4ac $$


## mermaid

[Document](https://mermaid-js.github.io/mermaid/) | [Home Page](https://github.com/mermaid-js/mermaid)

### Flow Chart

\`\`\`flow
graph LR
    A[Hard edge] -->|Link text| B(Round edge)
    B --> C{Decision}
    C -->|One| D[Result one]
    C -->|Two| E[Result two]
\`\`\`


### Sequence diagram

\`\`\`flow
sequenceDiagram
    participant Alice
    participant Bob
    Alice->>John: Hello John, how are you?
    loop Healthcheck
        John->>John: Fight against hypochondria
    end
    Note right of John: Rational thoughts <br/>prevail!
    John-->>Alice: Great!
    John->>Bob: How about you?
    Bob-->>John: Jolly good!
\`\`\`


### Class Diagram

\`\`\`flow
classDiagram
class Shape{
    <<interface>>
    noOfVertices
    draw()
}
class Color{
    <<enumeration>>
    RED
    BLUE
    GREEN
    WHITE
    BLACK
}
\`\`\`


### State Diagram

\`\`\`flow
stateDiagram
    [*] --> Active

    state Active {
        [*] --> NumLockOff
        NumLockOff --> NumLockOn : EvNumLockPressed
        NumLockOn --> NumLockOff : EvNumLockPressed
        --
        [*] --> CapsLockOff
        CapsLockOff --> CapsLockOn : EvCapsLockPressed
        CapsLockOn --> CapsLockOff : EvCapsLockPressed
        --
        [*] --> ScrollLockOff
        ScrollLockOff --> ScrollLockOn : EvCapsLockPressed
        ScrollLockOn --> ScrollLockOff : EvCapsLockPressed
    }
\`\`\`



### Gantt

\`\`\`flow
gantt
    title A Gantt Diagram
    %% this is a comment
    dateFormat  YYYY-MM-DD
    section Section
    A task           :a1, 2014-01-01, 30d
    Another task     :after a1  , 20d
    section Another
    Task in sec      :2014-01-12  , 12d
    another task      : 24d
\`\`\`

### Pie Chart

\`\`\`flow
pie
    title Key elements in Product X
    "Calcium" : 42.96
    "Potassium" : 50.05
    "Magnesium" : 10.01
    "Iron" :  5
\`\`\`

## Fundament
# H1
## H2
### H3
#### H4
##### H5
### ordered list
1. item1
1. item2

### unordered list
- unorder item1
- unorder item2

### Table
name | price | amount 
-|-:|-
one | $1 | 5 |
two | $1 | 6 |
three | $1 | 7 |

### Link

[Home Page](https://www.moki-life.com/mk)

`;
export default window.localStorage.getItem('cached') || defaultExample;
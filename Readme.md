## Goal

The goal is to get you to build a very small self-contained "real world" application to show off your skills at production quality code! You can write it in any language (though we'd prefer NodeJS, more details below), and it should only take an hour or two.

## Evaluation

Your implementation will be evaluated based on the following criteria:

1. Correctness of the implementation.
2. Efficiency and scalability of the implementation.
3. Quality of the documentation and comments.
4. Handling of edge cases.
5. Thoroughness and accuracy of the unit tests.


## The Scenario

The client periodically generates a large CSV file containing a list of monetary debts, which they manually summarize and turn into a second CSV.

The input CSV _should_ look like this:

```csv
Alex,Beatrice,101.32
Beatrice,Alex,1.20
Carl,Alex,45
Carl,Beatrice,12.50
Alex,Beatrice,19.22
Beatrice,Carl,67.90
Carl,Beatrice,12.80
Carl,Alex,15.88
Beatrice,Carl,71.42
Beatrice,Alex,4.54
Beatrice,Carl,28.76
```

The first line states that Alex owes Beatrice $101.32.

Currently, an intern is manually summarizing this data. If they used the above example, their result would look like this:

```csv
Alex,Beatrice,120.54
Beatrice,Alex,5.74
Beatrice,Carl,168.08
Carl,Alex,60.88
Carl,Beatrice,25.30
```

The client would like to automate this process, especially since these CSVs can get quite large!

Your job is to create a unix-friendly command line application that performs this summarizing **efficiently and correctly**.

## Submission

We would very much prefer this is written in NodeJS. However, we also want you to do your best work, so if you are not comfortable in NodeJS you may use another language (nothing too esoteric though please). Please reply to the email you got with your answer. You need to produce the entire source code repository, tests and all as a zip file of the repo, linked privately (eg a google drive link). Please, no public repositories.

## Pre-submission checks

Before submitting your code, please review the following checklist:

- [ ] Have you implemented a solution for the presented scenario?
- [ ] Have you written clear and concise documentation and comments?
- [ ] Have you thoroughly tested your implementation?
- [ ] Have you validated that your implementation handles edge cases?
- [ ] Have you ensured that your code is efficient and scalable?
- [ ] Do you consider your solution to be production-ready code?
- [ ] Is your solution ready in a zip file linked privately (eg a Google drive link)?

# Questions?

If you have any questions, reply to the email you received the instructions from.


Thank you for taking the time to complete this test. We look forward to reviewing your implementation!
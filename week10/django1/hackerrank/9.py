if __name__ == '__main__':
    n = int(input())
    student_marks = {}
    for _ in range(n):
        name, *line = input().split()
        scores = list(map(float, line))
        student_marks[name] = scores
    query_name = input()
    li = student_marks[query_name]
    res = 0.0
    for i in range(0, len(li)):
        res += li[i]
    res /= len(li)
    print("%.2f" % res)
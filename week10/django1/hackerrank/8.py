if __name__ == '__main__':
    s = []
    na = []
    n = int(input())
    for i in range(0, n):
        name = input()
        score = float(input())
        na.append([name])
        s.append([score])
    m = min(s)
    mm = max(s)
    for i in range(0, n):
        if s[i] != m:
            if mm > s[i]:
                mm = s[i]
    index = []
    res = []
    for i in range(0, n):
        if (s[i] == mm):
            index.append(i)
    for ind in range(0, len(index)):
        for i in range(0, n):
            if i == index[ind]:
                res.append(na[i])
    res.sort()
    for i in range(0, len(index)):
        for j in range(len(res[i])):
            print(res[i][j])
x = int(input())
cnt = 0
for m in range(1, x+1):
    if x%m == 0:
        cnt = cnt+1
print(cnt)
#!/bin/bash
red=$(tput setaf 1)
green=$(tput setaf 2)
yellow=$(tput setaf 3)
blue=$(tput setaf 4)
reset=$(tput sgr0)
# echo "${red}red text ${green}green text${reset}"
echo "${green}check before committing...${reset}"
for FILE in $(git diff --name-only --cached); do
  if [ ! -f $FILE ] || [[ $FILE == *".md"* ]] || [[ $FILE == *".html"* ]] || [[ $FILE == *"hooks"* ]] || [[ $FILE == *"dist"* ]] || [[ $FILE == *"example"* ]]; then
    echo "${blue}skip file " $FILE " => deleted or set not to check... ${reset}"
    continue
  fi

  # -e 实现多个选项间的逻辑or 关系
  # -i 查找时不区分大小写
  # -w 全字匹配
  if [ -f $FILE ]; then
    grep -n -i -w -w 'debugger' -w 'debugger;' -w 'console.log' -w 'console.log;' $FILE 2>&1
  fi

  if [ $? -eq 0 ]; then
    echo "${red}" $FILE "contains debugger/console.log, please delete it before submitting ${reset}"
    exit 1
  fi

done
echo "${green} check done ✅${reset}"
exit

#!/bin/bash
red=$(tput setaf 1)
green=$(tput setaf 2)
yellow=$(tput setaf 3)
blue=$(tput setaf 4)
reset=$(tput sgr0)
# echo "${red}red text ${green}green text${reset}"
echo "${green}开始 commit 前检查...${reset}"
for FILE in $(git diff --name-only --cached); do
  if [ ! -f $FILE ] || [[ $FILE == *".md"* ]] || [[ $FILE == *".html"* ]] || [[ $FILE == *"hooks"* ]] || [[ $FILE == *"dist"* ]] || [[ $FILE == *"example"* ]]; then
    echo "${blue}跳过文件" $FILE "=> 已删除或设置不进行检查...${reset}"
    continue
  fi

  # -e 实现多个选项间的逻辑or 关系
  # -i 查找时不区分大小写
  # -w 全字匹配
  if [ -f $FILE ]; then
    grep -n -i -w -e 'debugger' -e 'debugger;' -e 'console.log' -e 'console.log;' $FILE 2>&1
  fi

  if [ $? -eq 0 ]; then
    echo "${red}" $FILE "包含 debugger / console.log，请删除后再提交${reset}"
    exit 1
  fi

done
echo "${green}检查完成✅${reset}"
exit

### github
- https://docs.github.com/ru
- изменить имя папки в github
https://stackoverflow.com/questions/53467217/how-to-change-a-folder-name-in-github  
Перейдите в свой репозиторий, содержащий папку, которую вы хотите переименовать.
Затем нажмите клавишу «.».  
Появится веб-редактор. Перейдите к папке, щелкните по ней и нажмите Enter.
В web новое имя появляется, но только в github.dev  
Поэтому нужно:
Для перемещения файла по другому пути в браузере: Отредактируйте этот файл, затем вы можете переименовать файл. В поле переименования файла попробуйте ввести слэш /или удалить в начале поля ввода.  
Git оперирует только файлами, а не папками (они рассматриваются как пути к файлам). И вы можете переименовать файл, чтобы "переместить" его в другой каталог, в браузере, для всех файлов в этой папке, чтобы "изменить имя папки". Но, похоже, в браузере нет пакетных операций.
- github pages и имена репозитариев с нижним подчеркиванием: **Не работает**
### GitHub Actions
- [Автоматизация аналитических процессов с помощью GitHub Actions: практический гайд](https://habr.com/ru/articles/941444/)

### GitHub vs GitLab
- https://itlogia.ru/article/gitlab_i_github_v_chem_razlichiya
- https://softlist.kz/ru/news/gitlab-vs-github--zachem-ispolzovat-git-repozitoriy-i-chto-luchshe-ispolzova
  
### Git
- [Что такое Git и почему он стал стандартом разработки](https://habr.com/ru/articles/959760/)

### Pull Request
- https://docs.github.com/ru/pull-requests
- https://stepik.org/lesson/1791641/step/1
- Reverts В нижней части PR кнопка [Отменить изменения](https://docs.github.com/ru/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/reverting-a-pull-request). [revert](https://habr.com/ru/articles/520762/)
### author
Чтобы связаться с автором в случае, если нигде (в профиле) в явном виде не указаны его контакты.

1. Делаете git clone репозитария.
2. Запускаете команду git log

В логах в заголовках коммитов будет указан автор коммита и адрес его электронной почты.
Копируете оттуда email и пишите автору.

Или можно написать в репозитории в Issue Tracker. И автор получит уведомление.

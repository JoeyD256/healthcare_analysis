# Healthcare Analysis
This repository is a personal project I underwent to hone my data analysis skills. I will display my skills regarding data extraction, transforming, and wrangling the data, then displaying the visuals in a simple dashboard.

## Data Extraction and Transformation
I started this project by finding an xlsx file on kaggle that displayed data regarding cancer patients and their symptoms and habits. Each category is rated on a scale from 1 to 10. 1 being that the patient does not take part in that activity, or is not experiencing this symptom. 10 being the patient takes part in that activity very frequently, or is experiencing this symptom very regularly. Other categories are not rated this way such as age and gender. In a jupyter notebook file, I displayed the data in a dataframe, replaced the values in the "Gender" column with the values "male" and "female" instead of 1's and 2's. I set the "Patient Id" column as the dataframe's index, then began extracting visuals

## Extracting Visuals
For this project, I decided to hone in on the dietary habits of the patients, their gender, obesity rates, and age. For the age, I display my knowledge of bins and created a bar chart on those bins. For example I created a bin with an age range of 0-20, 21-30, 31-40 and so on. This bar chart was already sorted in decreasing order in regards to their value. However, I plan to change that in the future as I see fit. The other three graphs were pretty straight forward as I decided to make them all pie charts. I feel it's important to be reminded that the numbers on the pie charts are not supposed to be read as numeric values, but a score given to the patient in regards to that category. For example, upon reading the pie chart that displays the obesity rates, it indicates that 35.6% of patients scored a 7. Meaning 35.6% of patients are on the higher end regarding their weight. I then saved all of these images to their own folder for future use in displaying all of these visuals.

## Data Visualization
I began data visulization by creating an html file, I wanted to integrate JavaScript into my project, but the graphs I used were not created using any JavaScript library, but they were created using Jupyter Notbook, then saved as images in an images folder. These images were then displayed in the dashbaord in the html file. Since I did it this way, it made things tricky when trying to use JavaScript to integrate some kind of interactivity with the dashboard. So I took this as an opportunity to display some more skill. I reorganized the files to seperate the project between two sections. A Jupyter Notebook section, and a JavaScript section. The two sections are kind of self explanatory. The two files will use the same data, but analyzed using the two different tools, and both being displayed in a custom dashboard using HTML. One file relying on the saved images created using Jupyter Notebook, and the other using JavaScript for interactivity.

### Python
I already kind of gave an overview of the python dashboard, so I'll be brief as I don't want to seem repetative. Using Jupyter Notebook, I created three pie charts comparing cancer patients in regards to gender, dietary habit ratings, and obesity ratings, and a bar chart that displayed the groups of the ages of the patients using bins. I then saved these images of these graphs into a folder called "images" and refrenced these images when creating a dashboard to display these images using html.

![python_dashboard](https://github.com/user-attachments/assets/d944ea64-9da3-46fe-a6d4-0729da333f61)

### JavaScript
So far in the JavaScript dashboard, I have created the three pie charts and the bar charts. I do plan on reworking the pie charts to display percentages. I also displayed my ability to create bins in JavaScript, and used the "Chart.js" library to create the graphs. However, to be completely transparent, it has been a while since I have extensively worked with JavaScript, and on top of that this was my first time working with the "Chart.js" library. Because of these reasons, I relied heavily on chatgpt to help me whenever I got stumped. But I really enjoyed the challenge and it felt nice to learn a new library. And when the graphs appeared how I wanted them to, it felt very rewarding. I recently made a few changes to the dashboard such as labeling the charts. I am currently working on getting to display the percentages for each section of the pie charts.

![javascript_dashboard2](https://github.com/user-attachments/assets/20210126-f79e-4396-8d93-41055102a340)
![javascript_dashboard](https://github.com/user-attachments/assets/2ce21ea6-fd3a-4fef-aed3-e3a6ead0c5bf)

## Conclusion
When analyzing the graphs, I noticed that the obesity pie chart, and the Dietary Habits pie chart seemed to have a bit of a correlation. The "1" value seems to be about the same in the two pie charts. So does the values 2,3,5, and 7. The percentages of these values between the two pie charts seems to be about the same. Upon analyzing the Obesity pie chart, I notice that the three highest percentages are 7, 3, and 4. This leads me to believe that there isn't that much of a correlation between a patients obesity and their cancer diagnosis. Also, the three highest percentages on the Dietary Habits pie chart are 7, 2, and 3. This, much like the Obesity pie chart, does not show a strong correlation between a patients dietary habits and their cancer diagnosis. However, I do believe that the fact that in both charts, the highest percentage of patients scored a 7 should be noteworthy. But the next highest percentage of patients scored much lower in these same categories. Analyzing gender was interesting. I expected the pie chart to be slip 50/50, but it turns our, men make up 59.8% of the cancer patients in this sample. Finally, cancer rates seem to increase towards the early to mid stages of someones life. As the bar graph shows a rise from 0-19, then another rise from 20-29, and it rises again for the 30-39 age range. From there it decreases significantly within the next 2 age groups (40-49, and 50-59).

What can be definitely determined from this analysis of this sample of cancer patients, is that if you are a male in your 30s, you have the highest probability of being diagnosed with cancer. And if you are a female in your 70s, you have the lowest probability of being diagnosed with cancer.

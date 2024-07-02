# healthcare_analysis
This repository is a personal project I underwent to hone my data analysis skills. I will display my skills regarding data extraction, transforming, and wrangling the data, then displaying the visuals in a simple dashboard.

## Data Extraction and Transformation
I started this project by finding an xlsx file on kaggle that displayed data regarding cancer patients and their symptoms and habits. Each category is rated on a scale from 1 to 10. 1 being that the patient does not take part in that activity, or is not experiencing this symptom. 10 being the patient takes part in that activity very frequently, or is experiencing this symptom very regularly. Other categories are not rated this way such as age and gender. Since my goal for this project is to analyze the cause of cancer, I will only be focusing on the categories regarding the activity of the patients, and other unchangeable character traits (age, and gender).  In a jupyter notebook file, I displayed the data in a dataframe, replaced the values in the "Gender" column with the values "male" and "female" instead of 1's and 2's. I set the "Patient Id" column as the dataframe's index, then began extracting visuals

## Extracting Visuals
For this project, I decided to hone in on the dietary habits of the patients, their gender, obesity rates, and age. For the age, I display my knowledge of bins and created a bar chart on those bins. For example I created a bin with an age range of 0-20, 21-30, 31-40 and so on. This bar chart was already sorted in decreasing order in regards to their value. However, I plan to change that in the future as I see fit. The other three graphs were pretty straight forward as I decided to make them all pie charts. I feel it's important to be reminded that the numbers on the pie charts are not supposed to be read as numeric values, but a score given to the patient in regards to that category. For example, upon reading the pie chart that displays the obesity rates, it indicates that 35.6% of patients scored a 7. Meaning 35.6% of patients are on the higher end regarding their weight. I then saved all of these images to their own folder for future use in displaying all of these visuals.

## Data Visualization
I began the data visulization by creating an html file, and I plan on using javascript, so I created a javascript file as well. I have not accomplish much yet in the data visualization stage of this project, but currently I have the images displayed. In the future, I plan on organizing the dashboard, cleaning it, and making it look nicer.

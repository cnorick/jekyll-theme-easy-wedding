import { docReady } from "./helpers";

export function createAddToCalendarButton(data, buttonId) {
    docReady(() => {
        const myCalendar = createCalendar({
            options: {
                title: '',
                class: '',
            },
            data
        });
        const buttonElement = document.getElementById(buttonId);
        buttonElement.append(myCalendar);
    });
}
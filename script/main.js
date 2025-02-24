
document.addEventListener("alpine:init", () => {
    Alpine.data("nameGenerator", () => ({
        names: ['John', 'Doe', 'Bob', 'Charlie', 'David', 'Emma', 'Frank', 'Grace', 'Henry', 'Ivy'],
        selectedName: '',
        
        getRandomName() {
            let num = Math.floor(Math.random() * 10);
            this.selectedName = this.names[num]; 
        }
    }));
});

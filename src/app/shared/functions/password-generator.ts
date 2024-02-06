export  class PasswordGenerator {
    private lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
    private uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    private digits = "0123456789";
    private specialCharacters = "$@$!%*?&";
    private allCharacters = this.lowercaseLetters + this.uppercaseLetters + this.digits + this.specialCharacters;
  
    private getRandomCharacter = (chars: string) => {
      const randomIndex = Math.floor(Math.random() * chars.length);
      return chars[randomIndex];
    };
  
    generateRandomPassword = () => {
      let password = [
        this.getRandomCharacter(this.lowercaseLetters),
        this.getRandomCharacter(this.uppercaseLetters),
        this.getRandomCharacter(this.digits),
        this.getRandomCharacter(this.specialCharacters),
        ...Array.from({ length: Math.floor(Math.random() * 5) + 1 }, () => this.getRandomCharacter(this.allCharacters)),
      ].join('');
  
      return password;
    };
  }
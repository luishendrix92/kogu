import {capitalize, chars, isBlank, lines, surround, titleCase, unchars, unlines, unwords, words} from './text';

describe('lines', () => {
  it('should return a list of lines from a regular block of text', () => {
    expect(lines('The\nQuick\nBrown\nFox')).toEqual(['The', 'Quick', 'Brown', 'Fox'])
  });

  it('should trim empty lines at both ends by default or when specified', () => {
    expect(lines('\nHello\n\nWorld\n\n')).toEqual(['Hello', '', 'World']);
    expect(lines('\nHello\n  \nWorld\n\n', true)).toEqual(['Hello', '  ', 'World']);
  });

  it('should not trim empty lines at both ends when specified', () => {
    expect(lines('\nHello\n\n', false)).toEqual(['', 'Hello', '', '']);
  });
});

describe('unlines', () => {
  it('should join a list of strings into a string with new line characters', () => {
    expect(unlines(['Hello darkness', 'My old friend...'])).toBe('Hello darkness\nMy old friend...');
    expect(unlines(['', 'WoW', '', ''])).toBe('\nWoW\n\n');
  });
});

describe('words', () => {
  it('should produce a list of words given a sentence', () => {
    expect(words('One two three')).toEqual(['One', 'two', 'three']);
    expect(words(' | ')).toEqual(['', '|', '']);
  });
});

describe('unwords', () => {
  it('should join a list of words into a full sentence', () => {
    expect(unwords(['Jest', 'rocks!'])).toBe('Jest rocks!');
    expect(unwords(['', ' both ends ', ' '])).toBe('  both ends   ');
  });
});

describe('chars', () => {
  it('should produce a list of characters given a string', () => {
    expect(chars('aEi ')).toEqual(['a', 'E', 'i', ' ']);
  });
});

describe('unchars', () => {
  it('should join a list of characters into a string', () => {
    expect(unchars(['u', 'n', 'c', 'h', 'a', 'r', 's'])).toBe('unchars');
  });
});

describe('capitalize', () => {
  it('should uppercase a single-character string', () => {
    expect(capitalize('o')).toBe('O');
  });

  it('should not affect an empty string', () => {
    expect(capitalize('')).toBe('');
  });

  it('should properly capitalize a string', () => {
    expect(capitalize('woRd')).toBe('Word');
  });
});

describe('surround', () => {
  it('should add a given substring to the left and right', () => {
    expect(surround('o')('O')).toBe('oOo');
    expect(surround('')('untouched')).toBe('untouched');
  });

  it('should surround a string with the provided left and right substrings', () => {
    expect(surround('<li>', '</li>')('item')).toBe('<li>item</li>');
    expect(surround('', '')('intact')).toBe('intact');
  });

  it('should surround an empty string leaving only the surroundings', () => {
    expect(surround('Left>', '<Right')('')).toBe('Left><Right');
  });
});

describe('isBlank', () => {
  it('should return false for strings with at least one non-whitespace character', () => {
    expect(isBlank(' x ')).toBeFalsy();
    expect(isBlank(('Dog '))).toBeFalsy();
  });

  it('should return true for strings that only contain whitespace characters', () => {
    expect(isBlank(' ')).toBeTruthy();
    expect(isBlank('\n')).toBeTruthy();
    expect(isBlank('   \r')).toBeTruthy();
  });

  it('should return true for empty strings', () => {
    expect(isBlank('')).toBeTruthy();
  });
});

describe('titleCase', () => {
  it('should capitalize a single-word string', () => {
    expect(titleCase('wOrD')).toBe('Word');
    expect(titleCase(' wOrD ')).toBe(' Word ');
  });

  it('should capitalize a string with more than one word', () => {
    expect(titleCase('two woRDs')).toBe('Two Words');
    expect(titleCase('my o\'reilly books')).toBe('My O\'reilly Books');
  });

  it('should not affect empty strings', () => {
    expect(titleCase('')).toBe('');
    expect(titleCase(' ')).toBe(' ');
    expect(titleCase(' \n ')).toBe(' \n ');
  });
});

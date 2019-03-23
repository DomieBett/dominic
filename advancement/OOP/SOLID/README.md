# SOLID PRINCIPLE

SOLID is a programming principle that defines standards that make for more readable, maintanable and refactorable code. SOLID stands for:

* S - Single Responsiblity
* O - Open Closed
* L - Liskov Substitution
* I - Interface Segregation
* D - Dependency Inversion

> You can find corresponding code samples for each of these principles within matching file names.

## <u>Single Responsibility Principle.</u>

This defines that a class should have only one reason to change. It should serve only one purpose. This gives it more flexibility and understandability. It also makes the class more easily refactorable since one only needs to concentrate on changing just ability to perform one function without risking breaking some other functionality.

## <u>Open Closed Principle.</u>

A class should be Open for extension and Closed for modification. This means that it should support addition of new features without breaking existing code, and there shouldn't need for major refactoring of existing code due to simple additions or reductions.

## <u>Liskov Substitution</u>

This states that every subclass should be able to be substituted for their parent class. In the case of a subclass overriding parent class properties or methods, then there should be no likely hood of breaking. Therefore, the subclass should be able to be used as the parent class and still not cause code breaking changes.

## <u>Interface Segregation</u>

This explains that a class should not be forced to use a method that it doesnt need. Interface implementations should only be enforced upon classes that need the methods. Say for example, if we have an `AnimalInterface` containing methods such as `walk`, `fly` e.t.c, this interface should not be used to enforce a class `Cat` since a dog can't fly. Instead a different interface should be implemented such as `FelineInterface`.

## <u>Dependency Inversion</u>

It states that a high level module should not depend on a low level module, instead, they should both depend on abstractions. This ensures that there is no need for major changes when the lower level module changes, thus minimises code breakage on lower level module update.
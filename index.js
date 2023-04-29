#!/usr/bin/env node

/**
 * Prints heads or tails on console with a probability of 50/50
 */
if (Math.random() >= 0.5) {
    console.log("It is Heads");
} else {
    console.log("It is Tails");
}
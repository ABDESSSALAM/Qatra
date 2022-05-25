<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUrgencesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    /**
     * idUrg int AUTO_INCREMENT PRIMARY key,
    dateUrg date,
    Etat bit,
    IdAssoc int,
    Ville int,
    FOREIGN KEY(Ville) REFERENCES Ville(IdVille),
    FOREIGN KEY(IdAssoc) REFERENCES Association(IdAssoc)
     */
    public function up()
    {
        Schema::create('urgences', function (Blueprint $table) {
            $table->bigIncrements('IdUrg');
            
            $table->unsignedBigInteger('Association')->nullable();
            $table->unsignedBigInteger('Ville');
            $table->foreign('Ville')->references('id')->on('villes')
            ->onUpdate('cascade');
            $table->foreign('Association')->references('IdAssoc')->on('associations')
            ->onUpdate('cascade')
            ->onDelete('set null');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('urgences');
    }
}

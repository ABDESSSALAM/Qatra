<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAssociationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    /**
     * 
     * CREATE table Association(
        IdAssoc int AUTO_INCREMENT PRIMARY KEY,
        responsable bigint,
        dateCreation date,
            Etat bit,
            Ville int,
        FOREIGN KEY(responsable) REFERENCES users(id),
            FOREIGN KEY(Ville) REFERENCES Ville(IdVille)
        );
     */
    
    public function up()
    {
        Schema::create('associations', function (Blueprint $table) {        
            $table->bigIncrements('IdAssoc');
            $table->unsignedBigInteger('responsable');
            $table->date('dateCreation');
            
            $table->unsignedBigInteger('Ville');
            $table->foreign('responsable')->references('id')->on('users')
            ->onUpdate('cascade');
            $table->foreign('Ville')->references('id')->on('villes')
            ->onUpdate('cascade');
           
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
        Schema::dropIfExists('associations');
    }
}
